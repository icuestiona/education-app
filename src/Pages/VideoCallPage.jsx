import React, { useEffect, useRef, useState } from "react";
import { api } from "../Services/Api";

const VideoCallPage = () => {
  const localVideoRef = useRef(null);
  const remoteVideoRef = useRef(null);
  const peerRef = useRef(null);
  const [meetingLink, setMeetingLink] = useState("");
  const [status, setStatus] = useState("connecting");
  const [error, setError] = useState("");

  useEffect(() => {
    const loadMeetingLink = async () => {
      try {
        const response = await api.get("/video/meeting-link");
        setMeetingLink(response.meetingLink || "https://meet.example.com/demo-room");
      } catch (err) {
        setError(err.message || "Unable to fetch meeting link.");
      }
    };

    loadMeetingLink();
  }, []);

  useEffect(() => {
    const startCamera = async () => {
      try {
        if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
          setStatus("unsupported");
          return;
        }

        const stream = await navigator.mediaDevices.getUserMedia({
          video: true,
          audio: true,
        });

        if (localVideoRef.current) {
          localVideoRef.current.srcObject = stream;
        }

        const configuration = { iceServers: [{ urls: "stun:stun.l.google.com:19302" }] };
        const peer = new RTCPeerConnection(configuration);
        peerRef.current = peer;

        stream.getTracks().forEach((track) => peer.addTrack(track, stream));

        peer.ontrack = (event) => {
          if (remoteVideoRef.current) {
            remoteVideoRef.current.srcObject = event.streams[0];
          }
        };

        peer.oniceconnectionstatechange = () => {
          if (peer.iceConnectionState === "connected") {
            setStatus("connected");
          }
        };

        const offer = await peer.createOffer();
        await peer.setLocalDescription(offer);

        setStatus("ready");
      } catch (err) {
        setError(err.message || "Camera access was blocked.");
        setStatus("blocked");
      }
    };

    startCamera();

    return () => {
      if (peerRef.current) {
        peerRef.current.close();
      }
    };
  }, []);

  return (
    <main className="page-shell">
      <section className="page-header">
        <p className="eyebrow">Live support</p>
        <h1>Video tutoring room</h1>
      </section>

      <div className="video-layout">
        <div className="video-panel">
          <h2>Local preview</h2>
          <video ref={localVideoRef} autoPlay muted playsInline />
        </div>

        <div className="video-panel">
          <h2>Remote tutor</h2>
          <video ref={remoteVideoRef} autoPlay playsInline />
        </div>
      </div>

      <div className="status-card">
        <p>
          <strong>Status:</strong> {status}
        </p>
        {meetingLink && (
          <p>
            <strong>Meeting link:</strong>{" "}
            <a href={meetingLink} target="_blank" rel="noreferrer">
              {meetingLink}
            </a>
          </p>
        )}
        {error && <p className="form-status error">{error}</p>}
      </div>
    </main>
  );
};

export default VideoCallPage;

import React from "react";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import { useParams } from "react-router-dom";

const RoomPage = () => {
  const { roomid } = useParams();
  const myMeeting = async (element) => {
    const appID = 816160112;
    const serverSecret = "869d8976f4613c9c9f776f6542db686c";
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appID,
      serverSecret,
      roomid,
      Date.now().toString(),
      "Yash"
    );
    const zp = ZegoUIKitPrebuilt.create(kitToken);
    zp.joinRoom({
      container: element,
      scenario: {
        mode: ZegoUIKitPrebuilt.VideoConference,
      },
    });
  };
  return (
    <>
      <div className="flex bg-gradient-to-tr from-teal-800 to-blue-600  flex-col justify-center items-center w-screen gap-4 h-screen">
        <div
          className="myCallContainer rounded-3xl overflow-hidden "
          ref={myMeeting}
          style={{ width: "95vw", height: "95vh" }}
        ></div>
      </div>
    </>
  );
};

export default RoomPage;

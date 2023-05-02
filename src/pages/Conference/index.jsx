import React from "react";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import { useParams } from "react-router-dom";
import { useFirebase } from "../context/firebase";

const RoomPage = () => {
  const { roomid } = useParams();
  const firebase = useFirebase();
  const CurrentUserName = firebase.userName;
  const myMeeting = async (element) => {
    const appID = 705193319;
    const serverSecret = "c2ff4e6a0159a0747893ba39ac625a3d";
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appID,
      serverSecret,
      roomid,
      Date.now().toString(),
      CurrentUserName
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

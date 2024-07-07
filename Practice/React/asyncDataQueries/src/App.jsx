import { useEffect } from "react";
import { notificationAtom, totalNotficationSelector } from "./atoms";
import { RecoilRoot, useRecoilState, useRecoilValue } from "recoil";
import axios from "axios";

function App() {
  return (
    <div>
      <RecoilRoot>
        <Navbar></Navbar>
      </RecoilRoot>
    </div>
  );
}

function Navbar() {
  const [networkCount, setNetworkCount] = useRecoilState(notificationAtom);
  const totalNotificationCount = useRecoilValue(totalNotficationSelector);

  return (
    <div>
      <button>
        my network {networkCount.network >= 100 ? "99+" : networkCount.network}
      </button>
      <button>jobs {networkCount.jobs}</button>
      <button>messaging {networkCount.messages}</button>
      <button>notifications {networkCount.notifications}</button>
      <button>me {totalNotificationCount}</button>
    </div>
  );
}

export default App;

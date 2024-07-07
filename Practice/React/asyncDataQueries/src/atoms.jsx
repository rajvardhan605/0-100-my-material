import {atom, selector} from 'recoil';
import axios from 'axios';

export const notificationAtom = atom({
  key: 'notificationAtom',
  default: selector({
    key: 'notificationAtomSelector',
    get: async () => {
      const res = await axios.get("https://sum-server.100xdevs.com/notifications");
      return res.data;
    }
  })
})

export const totalNotficationSelector = selector({
  key: 'totalNotficationSelector',
  get: ({get}) => {
    const allNotifications = get(notificationAtom);
    return allNotifications.network + allNotifications.jobs + allNotifications.notifications + allNotifications.messaging;
  }
})
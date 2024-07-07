import { Searchbar } from "./Searchbar"

export const Appbar = () => {
  return <div className="flex justify-between mt-2">
    <div className="inline-flex items-center ml-4">
      Youtube
    </div>
    <div>
      <Searchbar/>
    </div>
    <div className="inline-flex items-center mr-4">
      Signin
    </div>
  </div>
}
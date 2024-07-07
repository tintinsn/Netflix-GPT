import { useSelector } from 'react-redux'

interface AccountMenuProps {
  visible: boolean
  onSignOut: () => void
}

const AccountMenu = ({ visible, onSignOut }: AccountMenuProps) => {
  const user = useSelector((state) => state.user)

  if (!visible || !user) return null

  return (
    <div className="bg-black w-56 absolute top-14 right-0 py-5 flex-col border-2 border-gray-800 flex">
      <div className="flex flex-col gap-3">
        <div className="px-3 group/item flex flex-row gap-3 items-center w-full">
          <img className="w-8 rounded-md" src="" alt="" />
          <p className="text-white text-sm group-hover/item:underline">{user.displayName}</p>
        </div>
        <hr className="bg-gray-600 border-0 h-px my-4" />
        {/* <div onClick={} className="px-3 text-center text-white text-sm hover:underline">Sign out of Netflix</div> */}
        <div onClick={onSignOut} className="px-3 text-center text-white text-sm hover:underline">
          Sign out of Netflix
        </div>
      </div>
    </div>
  )
}

export default AccountMenu

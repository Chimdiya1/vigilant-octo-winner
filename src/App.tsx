import "./App.css";
import UsersTable from "./components/core/users/usersTable";
import NavMenu from "./components/global/navMenu";
import SideBar from "./components/global/sideBar";

function App() {
  return (
    <>
      <NavMenu />
      <div className="bg-[#F0F2F5] px-6 py-5 min-h-screen md:grid md:grid-cols-[176px_1fr] lg:grid-cols-[224px_1fr] gap-14">
        <SideBar />
        <div>
          <div className="flex items-center gap-2 text-sm text-[#98A2B3] mb-8">
            <span>Settings</span>
            <span>/</span>
            <span>Users & Roles Settings</span>
          </div>
          <h2 className="text-[#1D2739] font-bold text-2xl mb-2">
            Users & Roles
          </h2>
          <span className="text-base text-[#98A2B3] font-normal">
            Manage all users in your business
          </span>
          <div className="mt-6 mb-4">
            <span className="border-b-2 px-4 py-2 text-[#0D6EFD] border-[#0D6EFD]">
              Users
            </span>
            <span className="text-[#98A2B3] px-4 py-2 ">Roles</span>
          </div>
          <UsersTable />
        </div>
      </div>
    </>
  );
}

export default App;

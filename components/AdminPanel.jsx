import React from "react";
import { MdAdminPanelSettings } from "react-icons/md";

const AdminPanel = async ( {user} ) => {

  return (
    <div>
      <button>
        { user  && user?.role === "ADMIN" && (
          <a
            href="http://localhost:5555/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 text-white px-3 py-2 rounded-md text-sm font-medium mr-4 flex-center me-4 hover:bg-gray-900"
          >
            Admin
            <MdAdminPanelSettings className=" w-5 h-5 ms-2" />
          </a>
        )}
      </button>
    </div>
  );
};

export default AdminPanel;

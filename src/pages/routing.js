import { Routes, Route, Navigate } from "react-router-dom";
import { UsersTable } from "./UsersPage/UsersTable";
import { Container } from "../components/Container/Container";
import { EditPage } from "./Edit/EditPage";


export const Routing = () => (
  <Routes>
      <Route element={<Container />}>
        <Route path="*" element={<Navigate to="/users"  replace />} />
        <Route
          index 
          element={<UsersTable />} 
           path="/users"
          key={'/users'}
        />`
        <Route 
          element={<EditPage />} 
          path="/edit/:id"
          key={'/edit'}
        />
      </Route>
  </Routes>
)
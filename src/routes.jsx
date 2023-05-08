import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "./layouts/MainLayout";
import { Home } from "./pages/Home";
import { Candidats } from "./pages/Candidats";
import { Hiring } from "./pages/Hiring";
import { Blog } from "./pages/Blog";
import { Articles } from "./pages/Articles";
import { Article } from "./pages/Article";
import { Search } from "./pages/Search";
import { Company } from "./pages/Company";
import { PostJob } from "./pages/PostJob";
import { ProtectedRoute } from "./components/protectedRoute/ProtectedRoute";

export const routes = createBrowserRouter([
   {
      path: "/",
      element: <MainLayout/>,
      children: [
         {
            path: "/",
            element:<Home/>
         },
         {
            path: "candidats",
            element:<Candidats/>
         },
         {
            path: "hiring",
            element:<Hiring/>
         },
         {
            path: "blog/",
            element: <Blog />
         },
         {
            path: "blog/:id",
            element:<Article/>
         },
        
         {
            path: "blog/article",
            element:<Articles/>
         },
        
         {
            path: "search",
            element:<Search/>
         },
         {
            path: "contacts",
            element:<Company/>
         },
         {
            path: "post",
            element:<ProtectedRoute><PostJob/></ProtectedRoute>
         },
      ]
   }
])
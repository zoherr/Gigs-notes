import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './redux/store.js'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
// import { Home } from '@mui/icons-material'
import SignInSide from './components/signup.jsx'
import Hero from './components/Hero.jsx'
import NewUser from './components/newuser.jsx'
import { Toaster } from "react-hot-toast";
import AuthLayout from './components/AuthLayout.jsx'
import Semester from './components/Semester.jsx'
import Subject from './components/Subject.jsx'
import PostForm from './components/PostForm.jsx'
import PostCard from './components/PostCard.jsx'
import Post from './components/Post.jsx'
import SemesterQBank from './components/SemesterQBank.jsx'
import SemesterQPaper from './components/SemesterQPaper.jsx'
import SubjectQPaper from './components/SubQPaper.jsx'
import SubjectQBank from './components/SubQBank.jsx'
import EditPost from './components/EditPost.jsx'
import  PostList  from './components/PostList.jsx'

const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
          {
              path: "/",
              element: <Hero />,
          },
          {
              path: "/login",
              element: (
                  <AuthLayout authentication={false}>
                      <SignInSide />
                   </AuthLayout>
              ),
          },
          {
              path: "/signup",
              element: (
                  <AuthLayout authentication={false}>
                      <NewUser />
                 </AuthLayout>
              ),
          },
          {
            path: "/semester/:batch",
            element: (
                    <Semester  />
            ),
        },
        {
            path: "/semester-qbank/:batch",
            element: (
                    <SemesterQBank  />
            ),
        },
        {
            path: "/semester-qpaper/:batch",
            element: (
                    <SemesterQPaper  />
            ),
        },
        {
            path: "/sub-notes/:name",
            element: (
                    <Subject  />
            ),
        },
        {
            path: "/sub-qpaper/:name",
            element: (
                    <SubjectQPaper  />
            ),
        },
        {
            path: "/sub-qbank/:name",
            element: (
                    <SubjectQBank  />
            ),
        },
        //   {
        //       path: "/all-posts",
        //       element: (
        //           <AuthLayout authentication>
        //               {" "}
        //               <AllPosts />
        //           </AuthLayout>
        //       ),
        //   },
          {
              path: "/add-post",
              element: (
                  <AuthLayout authentication>
                      {" "}
                      <PostForm />
                  </AuthLayout>
              ),
          },
          {
            path: "/userposts/:user",
            element: (
                <AuthLayout authentication>
                    {" "}
                    <PostList />
                </AuthLayout>
            ),
        },
          {
              path: "/edit-post/:slug",
              element: (
                  <AuthLayout authentication>
                      {" "}
                      <EditPost />
                  </AuthLayout>
              ),
          },
          {
              path: "/post/:slug",
              element: <Post />,
          },
      ],
  },
  ])

ReactDOM.createRoot(document.getElementById('root')).render(
<Provider store={store}>
<Toaster position="top-center" />
<RouterProvider router={router}/>
</Provider>
)

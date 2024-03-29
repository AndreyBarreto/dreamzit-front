import { Suspense, lazy, useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import SignIn from './pages/Authentication/SignIn';
import SignUp from './pages/Authentication/SignUp';
import Loader from './common/Loader';
import routes from './routes';
import Tables from './pages/Tables';

const DefaultLayout = lazy(() => import('./layout/DefaultLayout'));

function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const [token, setToken] = useState(localStorage.getItem('jwtToken'))

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <>
      <Toaster
        position="top-right"
        reverseOrder={false}
        containerClassName="overflow-auto"
      />
      <Routes>
        <Route path="/*" element={<SignIn />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        {token ?
          <Route element={<DefaultLayout />}>
            <Route index element={<Tables />} />
            {routes.map((routes, index) => {
              const { path, component: Component } = routes;
              return (
                <Route
                  key={index}
                  path={path}
                  element={
                    <Suspense fallback={<Loader />}>
                      <Component />
                    </Suspense>
                  }
                />
              );
            })}
          </Route> : ""
        }

      </Routes>
    </>
  );
}

export default App;

import { type AppType } from "next/app";
import { api } from "~/utils/api";
import {ClerkProvider} from '@clerk/nextjs'

import "~/styles/globals.css";
import { Navbar } from "~/components/Navbar";

const MyApp: AppType = ({ Component, pageProps }) => {
      return (
        <ClerkProvider {...pageProps}>
          <div className="light:text-black dark:text-white">
            <Navbar/>
            <Component {...pageProps} />
          </div>

      </ClerkProvider>
    );
};

export default api.withTRPC(MyApp);

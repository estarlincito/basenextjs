import Footer from '@/components/layout/footer';
import Navbar from '@/components/layout/navbar';
import AppThemeProvider from '@/context/theme';
import Toaster from '@/lib/toaster';
import '@/styles/themes-config.css';
import Children from '@/types/children';
import { Theme } from '@radix-ui/themes';
import '@radix-ui/themes/styles.css';
import React from 'react';

const RootLayout: React.FC<Children> = (props) => {
  return (
    <html lang='en' suppressHydrationWarning>
      <body>
        <Theme accentColor='sky' radius='full'>
          <AppThemeProvider>
            <Navbar />
          </AppThemeProvider>
          {props.children}
          <Footer />
        </Theme>
        <Toaster
          position='top-center'
          reverseOrder={false}
          toastOptions={{
            style: {
              color: 'white',
              background: 'black',
            },
          }}
        />
      </body>
    </html>
  );
};

export default RootLayout;

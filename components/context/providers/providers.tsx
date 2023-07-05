// providers.tsx

// Required imports for the component
import React from 'react';
import AuthProvider from "@/components/context/providers/auth/auth-provider";
import ThemeProvider from "@/components/context/providers/theme/theme-provider";


/**
 * Providers component that combines the ThemeProvider and AuthProvider
 *
 * @param {React.PropsWithChildren<{}>} props - The props that might be used in this functional component.
 *
 * @returns {JSX.Element} - Returns the children wrapped in ThemeProvider and AuthProvider contexts.
 */
const Providers: React.FC<React.PropsWithChildren<{}>> = ({children}) => {
    return (
        <>
            {/* AuthProvider wraps the children to provide authentication related context */}
            <AuthProvider>
                {/*// ThemeProvider wraps the children to provide theme related context*/}
                <ThemeProvider>
                    {children}
                </ThemeProvider>
            </AuthProvider>
        </>

    )
}

// Export Providers component as default
export default Providers;

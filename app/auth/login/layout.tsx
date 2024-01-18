const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="auth-layout-wrapper flex items-center justify-center min-h-[100dvh] h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400 to-blue-800">
      {children}
    </div>
  );
};

export default AuthLayout;

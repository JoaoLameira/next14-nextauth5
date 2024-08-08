const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col items-center justify-center h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-neutral-700 to-neutral-900">
      {children}
    </div>
  );
};

export default AuthLayout;

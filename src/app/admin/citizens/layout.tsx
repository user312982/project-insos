interface CitizensLayoutProps {
  children: React.ReactNode;
}

export default function CitizensLayout({ children }: CitizensLayoutProps) {
  return <div className="bg-gray-50 min-h-screen">{children}</div>;
}

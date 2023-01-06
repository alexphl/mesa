import UIProvider from "./UIProvider";

export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <div className="grid-cols-[105px_5fr] justify-evenly sm:grid lg:grid-cols-[140px_5fr]">
        <UIProvider />

        <div className="col-start-2 my-10 grid gap-6 sm:pr-10 lg:pr-14">
          {children}
        </div>
      </div>
    </section>
  );
}

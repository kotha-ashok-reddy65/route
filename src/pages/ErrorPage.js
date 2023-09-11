import MainNavigation from "../components/MainNavigation";

function ErrorPage() {
  return (
    <>
      <MainNavigation></MainNavigation>

      <main>
        <h1>Page is not loaded.</h1>
        <p>Please try again!</p>
      </main>
    </>
  );
}
export default ErrorPage;

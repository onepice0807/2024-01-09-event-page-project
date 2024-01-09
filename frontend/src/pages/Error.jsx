import { useRouteError } from "react-router-dom";
import PageContent from "../components/PageContent";
import MainNavigation from "../components/MainNavigation";

function ErrorPage() {
  const error = useRouteError();

  let title = "오류가 발생했습니다.";
  let massage = "잘못되었습니다";

  if (error.status === 500) {
    massage = error.data.massage;
  }

  if (error.status === 404) {
    title = "찾을 수 없음";
    massage = "리소스 또는 페이지를 찾을 수 없습니다";
  }
  return (
    <>
      <MainNavigation />
      <PageContent title={title}>
        <p>{massage}</p>
      </PageContent>
    </>
  );
}

export default ErrorPage;

import { useRouter } from "next/router";

export default function Page() {
  const router = useRouter();
  return <p>Page number: {router.query.pageId}</p>;
}

import axios from "axios";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function AktywacjaUzytkownika() {
  const router = useRouter();

  useEffect(() => {
    async function publishClient() {
      const token = router.query.token;
      const apiEndpointUrl = "/api/user";

      if (token) {
        const response = await axios.patch(apiEndpointUrl, { token });
        console.log(response);
      }
    }
    publishClient();
  }, [router]);

  return <h1>Aktywowałeś swoje konto</h1>;
}
import React, { FormEvent, useState } from "react";

interface FormSubmitResp {
  message: string;
}

const Page = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<FormSubmitResp | null>();

  const formOnSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);

    try {
      const formData = new FormData(event.currentTarget);
      const response = await fetch("/api/formsubmit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      setData(data);
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <form onSubmit={formOnSubmit}>
        <input type="text" name="name"></input>
        <button type="submit" disabled={isLoading}>
          {isLoading ? "Loading" : "Submit"}
        </button>
      </form>
      {JSON.stringify(data)}
    </>
  );
};

export default Page;

'use client';
import { useState } from "react";
import { IContactForm } from "../_forms";
import { sendContactForm } from "../_api/contact";

const useContactForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (form: IContactForm) => {
    setError('');
    try {
      setIsLoading(true);
      await sendContactForm(form)
      setIsFinished(true);
    } catch (e) {
      setError('something went wrong.')
    } finally {
      setIsLoading(false);
    }
  }

  return {
    isLoading,
    isFinished,
    error,
    handleSubmit
  }
}

export default useContactForm;
"use client"

import { Button } from "@/components/button"
import { InputRadio } from "./input-radio"
import { InputText } from "./input-text"
import { PrivacyText } from "./privacy-text"
import { useState } from "react"

export function FormHero() {
  const [category, setCategory] = useState("person")

  const getCategory = (category: "person" | "business") => {
    setCategory(category)
  }

  return (
    <div className="py-6 md:pt-10 px-6 md:px-11 max-w-[800px] lg:max-w-full mx-auto lg:mx-0 relative shadow-shape z-40 pb-7 space-y-6 bg-neutral-white rounded-md">
      <div className="space-y-2">
        <span className="text-sm font-semibold leading-5 text-gray-50">
          Faça parte da revolução digital!
        </span>
        <h6 className="font-semibold max-w-72">
          Cadastre-se e faça parte do lançamento oficial
        </h6>
      </div>
      <form className="w-full max-w-[400px] space-y-6">
        <fieldset className="flex-center gap-8">
          <InputRadio getCategory={getCategory} checked category="person">
            Para você
          </InputRadio>
          <InputRadio getCategory={getCategory} category="business">
            Para empresa
          </InputRadio>
        </fieldset>
        <div className="mt-8 space-y-4">
          <InputText
            type="text"
            placeholder={category === "person" ? "Nome" : "CNPJ"}
            name="name"
          />
          <InputText type="email" placeholder="E-mail" name="email" />
          <InputText type="tel" placeholder="Celular" name="phone" />
        </div>
        <Button type="submit" color="primary" size="lg">
          {category === "person"
            ? "Quero ser cliente"
            : "Quero para minha empresa"}
        </Button>
      </form>
      <PrivacyText />
    </div>
  )
}

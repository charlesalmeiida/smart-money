import { Button } from "@/components/button"

export function Newsletter() {
  return (
    <div className="space-y-4 sm:flex justify-center items-center lg:block">
      <div className="bg-neutral-white mx-auto sm:mx-0 sm:max-w-newsletter flex flex-col sm:flex-row justify-between rounded-md sm:pl-6 pl-5 sm:pr-4 py-5 sm:py-3 max-w-[303px]">
        <input
          className="placeholder:text-gray-50 flex-1  outline-none "
          type="email"
          placeholder="Insira seu melhor e-mail"
          name="email"
          id="email"
        />
        <button className="bg-primary-default hidden sm:block transition-all py-[10px] px-4 rounded-md text-neutral-white text-sm leading-5 font-semibold hover:bg-primary-light">
          Receber Novidades
        </button>
      </div>
      <div className="sm:hidden">
        <Button color="primary" size="md">
          Receber Novidades
        </Button>
      </div>
    </div>
  )
}

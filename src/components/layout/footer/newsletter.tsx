export function Newsletter() {
  return (
    <div className="bg-neutral-white max-w-newsletter flex-between rounded-md pl-6 pr-4 py-3">
      <input
        className="placeholder:text-gray-50 outline-none "
        type="email"
        placeholder="Insira seu melhor e-mail"
        name="email"
        id="email"
      />
      <button className="bg-primary-default transition-all py-[10px] px-4 rounded-md text-neutral-white text-sm leading-5 font-semibold hover:bg-primary-light">
        Receber Novidades
      </button>
    </div>
  )
}

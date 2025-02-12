export const formatDate = (date: string) => {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
  }
  const formattedDate = new Date(date).toLocaleDateString("pt-BR", options)
  return formattedDate
    .split(" ")
    .map((word, index) => {
      if (index === 0) {
        return word.charAt(0).toUpperCase() + word.slice(1)
      }
      return word
    })
    .join(" ")
}

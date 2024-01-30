export const dateFormatter = (date: string) => {

    const formatter = new Intl.DateTimeFormat('pt-BR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        // hour: '2-digit',
        // minute: '2-digit',
        // second: '2-digit',
        timeZone: 'UTC',
    })

    const dateObject = new Date(date)

    return formatter.format(dateObject)
}

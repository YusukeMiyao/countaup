import diffDate from './date'

export default function setDate() {
    const date = new Date
    return (
        diffDate(date)
    )
}
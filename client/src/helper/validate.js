const validate = (name, value) => {
    switch (name) {
        case 'num':
            if (value.length <= 20) {
                return Number(value.replace(/[.*+?^${}()<>a-zA-Zа-яА-ЯёЁ |[\]\\]/gi, ''))
            } else {
                console.error("Ввели слишком много символов")
                return ''
            }
        case 'price':
            if (value.length <= 10) {
                return Number(value.replace(/[.*+?^${}()<>a-zA-Zа-яА-ЯёЁ |[\]\\]/gi, ''))
            } else {
                console.error("Ввели слишком много символов")
                return ''
            }
        case 'name':
            if (value.length <= 60) {
                return value.replace(/[.*+?^${}()<>|[\]\\]/gi, '')
            } else {
                console.error("Ввели слишком много символов")
                return ''
            }
        case 'lastName':
            if (value.length <= 20) {
                return value.replace(/[.*+?^${}()<>0-9|[\]\\]/gi, '')
            } else {
                console.error("Ввели слишком много символов")
                return ''
            }
        case 'firstName':
            if (value.length <= 20) {
                return value.replace(/[.*+?^${}()<>0-9|[\]\\]/gi, '')
            } else {
                console.error("Ввели слишком много символов")
                return ''
            }
        case 'year':
            if (value.length <= 4) {
                return Number(value.replace(/[.*+?^${}()<>a-zA-Zа-яА-ЯёЁ |[\]\\]/gi, ''))
            } else {
                console.error("Ввели слишком много символов")
                return ''
            }
        case 'vote':
            if (value.length <= 5) {
                return Number(value.replace(/[.*+?^${}()<>a-zA-Zа-яА-ЯёЁ |[\]\\]/gi, ''))
            } else {
                console.error("Ввели слишком много символов")
                return ''
            }
        case 'rating':
            if (value.length < 2) {
                return Number(value.replace(/[.*+?^${}()<>a-zA-Zа-яА-ЯёЁ |[\]\\]/gi, ''))
            } else {
                console.error("Ввели слишком много символов")
                return ''
            }
        case 'isbn':
            if (value.length < 20) {
                return value.replace(/[.*+?^${}()<>a-zA-Zа-яА-ЯёЁ |[\]\\]/gi, '')
            } else {
                console.error("Ввели слишком много символов")
                return ''
            }
        default:
            if (value.length < 2) {
                return String(value.replace(/[.*+?^${}()<>|[\]\\]/gi, ''))
            } else {
                console.error("Ввели слишком много символов")
                return ''
            }
    }
}
export default validate
export const formatDate = (date) => {
  const formatter = new Intl.DateTimeFormat("ru", {
    hour: 'numeric',
    minute: 'numeric',
    timeZone: 'Europe/Moscow'
  });

  let dateOfOrder = new Date(date);

  const today = new Date();

  function diffSubtract(dayOne, dayTwo) {
    return Math.ceil((dayOne - dayTwo) / 86400000);
  }

  let dayQty = diffSubtract(today, dateOfOrder);

  const formatterForFay = new Intl.DateTimeFormat("ru", {
    day: 'numeric',
    year: 'numeric',
    month: 'long',
    timeZone: 'Europe/Moscow'
  });

  const formatDay = (dateOfOrder, dayQty) => {
    if (formatterForFay.format(today) === formatterForFay.format(dateOfOrder)) {
      return 'Cегодня'
    }
    if (dayQty === 1) {
      return 'Вчера'
    }
    if (dayQty === 2 || dayQty === 3 || dayQty === 4) {
      return `${dayQty} дня назад`
    }
    if (dayQty > 4 ) {
      return `${dateOfOrder.toLocaleDateString("ru-RU")}`
    }

  }
  return `${formatDay(dateOfOrder, dayQty)}, ${formatter.format(dateOfOrder)} i-GMT+3`
}
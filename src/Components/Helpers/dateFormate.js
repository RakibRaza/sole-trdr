const dateFormate = (date) => {
  function join(t, a, s) {
    function format(m) {
      let f = new Intl.DateTimeFormat('en', m);
      return f.format(t);
    }
    return a.map(format).join(s);
  }

  let a = [{ day: 'numeric' }, { month: 'long' }, { year: 'numeric' }];
  return join(new Date(date), a, ' ');
}
export default dateFormate;

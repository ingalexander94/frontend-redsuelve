export default interface Account {
  _id?: String;
  person: {
    _id: String;
    identification: String;
  };
  bank: {
    _id: String;
    nit: String;
  };
  bonding: Date;
  code: String;
}

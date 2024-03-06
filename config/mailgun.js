import Mailgen from "mailgen";
let mailGenerator = new Mailgen({
  theme: "default",
  product: {
    name: "JSPMERN",
    link: "https://github.com/jspmern",
  },
});
export default mailGenerator;

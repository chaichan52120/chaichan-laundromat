import { reactive } from "vue";

interface myHistory {
  id: number;
  name: string;
  rates: number;
  timer: number;
}

export const store = reactive({
  cash: 100,
  history: reactive<myHistory[]>([]),
  addCash(cash: number) {
    this.cash += cash;
  },
  addHistory(data: any) {
    this.cash -= data.rates;
    this.history.push({
      id: data.id,
      name: data.name,
      rates: data.rates,
      timer: data.timer,
    });
    const history_id_length = this.history.filter(
      (e) => e.id === data.id
    ).length;
    let interval = setInterval(() => {
      if (
        this.history.filter((e) => e.id === data.id)[history_id_length - 1]
          .timer === 0
      ) {
        clearInterval(interval);
      } else {
        if (
          this.history.filter((e) => e.id === data.id)[history_id_length - 1]
            .timer === 60
        ) {
          this.sendLineNotify();
        }
        this.history.filter((e) => e.id === data.id)[history_id_length - 1]
          .timer--;
      }
    }, 1000);
  },
  sendLineNotify() {
    if (localStorage.lineToken) {
      fetch("https://notify-api.line.me/api/notify", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          "Authorization": `Bearer ${localStorage.lineToken}`,
        },
        body: "message=เครื่องซักผ้าที่คุณซักเหลือเวลาอีก 1 นาทีจะเสร็จ",
      })
        .then((response) => response.json())
        .then((data) => console.log(data));
    }
  },
});

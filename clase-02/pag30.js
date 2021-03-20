const exampleObj = {
  nombre: "sopita",
  apellido: "quick",
  email: "sopita@quick.com",
};

const resAfter2Secs = (arr) => {
  return new Promise((res, rej) => {
    setTimeout(() => res(arr), 2000);
  });
};

const logObjEntries = async (obj) => {
  const entries = Object.entries(obj);
  try {
    for (const entry of entries) {
      const res = await resAfter2Secs(entry);
      console.log(res);
    }
  } catch (error) {
    console.log(error);
  }
};

logObjEntries(exampleObj);

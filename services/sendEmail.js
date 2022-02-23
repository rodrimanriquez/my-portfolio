const sendEmail = async (data) => {
  try {
    const resp = await fetch(`api/contact`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
    const respData = resp

    return respData?.status === 200
  } catch (error) {}
}

export default sendEmail

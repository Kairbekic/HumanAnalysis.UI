import React from "react"
import axios from "axios"

const API_URL = "https://localhost:7184"

export const getPosts = async (id) => {
  try {
    const res = await axios.get(`${API_URL}/Project/GetProject/${id}`)
    console.log(res.data)
    return res.data
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log(error.response?.data.errText, "error")
    } else if (error instanceof Error) {
      console.log(error.message)
    }
  }
}

import { ICar } from "../../interfaces/ICar";

const carCreatedMock: ICar = {
  "model": "Ferrari Maranello",
  "year": 1963,
  "color": "red",
  "buyValue": 3500000,
  "seatsQty": 2,
  "doorsQty": 2
}

const allCars: ICar[] & { _id: string }[] = [
    {
        "_id": "62ffd18778e9c4e8f28c2c78",
        "model": "Ferrari Maranello",
        "year": 1963,
        "color": "red",
        "buyValue": 3500000,
        "seatsQty": 2,
        "doorsQty": 2
    },
    {
    "_id": "62ffd53678e9c4e8f28c2c84",
    "model": "Honda HR-V",
    "year": 2022,
    "color": "prata",
    "buyValue": 5500000,
    "seatsQty": 2,
    "doorsQty": 4
    }
]

const carWithIdMock: ICar & { _id: string } = {
  "_id": "62ffd18778e9c4e8f28c2c78",
  "model": "Ferrari Maranello",
  "year": 1963,
  "color": "red",
  "buyValue": 3500000,
  "seatsQty": 2,
  "doorsQty": 2
}

const carUpdatedMock: ICar & { _id: string } = {
  "_id": "62ffd18778e9c4e8f28c2c78",
  "model": "Fiat Uno",
  "year": 1963,
  "color": "blue",
  "buyValue": 3500,
  "seatsQty": 4,
  "doorsQty": 4
}

const updateCarMock: ICar = {
  "model": "Fiat Uno",
  "year": 1963,
  "color": "blue",
  "buyValue": 3500,
  "seatsQty": 4,
  "doorsQty": 4
}

export {
    carCreatedMock,
    carUpdatedMock,
    carWithIdMock,
    allCars,
    updateCarMock,
}


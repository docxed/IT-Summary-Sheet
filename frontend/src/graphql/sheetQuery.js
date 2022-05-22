import { gql } from "@apollo/client"

export const SHEET_QUERY = gql`
  query Sheets($sort: SortFindManySheetInput) {
    sheets(sort: $sort) {
      _id
      courseTitle
      year
      programme
      sheetFile
      price
      userId
      user {
        _id
        username
        fullname
      }
      createdAt
    }
  }
`

export const GET_SHEET_QUERY = gql`
  query SheetId($sheetId: MongoID!) {
    sheetId(_id: $sheetId) {
      _id
      courseTitle
      year
      programme
      sheetFile
      price
      user {
        username
        fullname
      }
      favorite(filter: { sheetId: $sheetId }) {
        _id
        sheetId
        userId
      }
      userId
      createdAt
    }
  }
`

export const SHEET_BY_USERID_QUERY = gql`
  query Sheets($userId: MongoID!) {
    sheets(filter: { userId: $userId }) {
      _id
      courseTitle
      year
      programme
      sheetFile
      price
      user {
        username
        fullname
      }
      userId
      createdAt
    }
  }
`

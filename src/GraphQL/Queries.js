import { gql } from "@apollo/client";

export const LOAD_ORDERS_BYID = gql`
  query LOAD_ORDERS_BYID($orderId: [uuid!]) {
    offer_trade(where: {offer_id: {_in: $orderId}}) {
      offer_id
      trade_id
      offer {
        cash_add
        offer_payments {
          total_amount
          id
        }
        offer_trades {
          trade {
            id
            user {
              name
              email
              user_addresses {
                city
                country
                state
                zipcode
              }
            }
            sneaker {
              retail_price
              name
              thumb_url
            }
            sneaker_condition {
              title
            }
            sneaker_size {
              title
            }
            trade_status {
              title
            }
            offer_trades {
              offer {
                offer_payments {
                  total_amount
                }
              }
            }
          }
        }
      }
      trade {
        created_at
        user {
          name
          email
          user_addresses {
            city
            country
            state
            zipcode
          }
        }
        sneaker {
          retail_price
          name
          shoe
          thumb_url
          style_id
        }
        sneaker_condition {
          title
        }
        sneaker_size {
          title
        }
        trade_status {
          title
        }
      }
    }
  }
`;
export const LOAD_ORDERS = gql`
  query MyQuery {
    offer_trade(order_by: {created_at: desc}) {
      offer_id
      trade_id
      offer {
        cash_add
        offer_payments {
          id
          total_amount
          offer_tracking_status_id
        }
        offer_trades {
          trade {
            id
            user {
              name
              email
              user_addresses {
                city
                country
                state
                zipcode
              }
            }
            sneaker {
              retail_price
              name
              thumb_url
              style_id
            }
            sneaker_condition {
              title
            }
            sneaker_size {
              title
            }
            trade_status {
              title
            }
            offer_trades {
              offer {
                offer_payments {
                  total_amount
                }
              }
            }
          }
        }
      }
      trade {
        created_at
        user {
          name
          email
          user_addresses {
            city
            country
            state
            zipcode
          }
        }
        sneaker {
          retail_price
          name
          shoe
          thumb_url
        }
        sneaker_condition {
          title
        }
        sneaker_size {
          title
        }
        trade_status {
          title
        }
      }
    }
  }
`;
export const LOAD_ORDERS_ASC = gql`
  query MyQuery {
    offer_trade(order_by: {created_at: asc}) {
      offer_id
      trade_id
      offer {
        cash_add
        offer_payments {
          id
          total_amount
          offer_tracking_status_id
        }
        offer_trades {
          trade {
            id
            user {
              name
              email
              user_addresses {
                city
                country
                state
                zipcode
              }
            }
            sneaker {
              retail_price
              name
              thumb_url
              style_id
            }
            sneaker_condition {
              title
            }
            sneaker_size {
              title
            }
            trade_status {
              title
            }
            offer_trades {
              offer {
                offer_payments {
                  total_amount
                }
              }
            }
          }
        }
      }
      trade {
        created_at
        user {
          name
          email
          user_addresses {
            city
            country
            state
            zipcode
          }
        }
        sneaker {
          retail_price
          name
          shoe
          thumb_url
        }
        sneaker_condition {
          title
        }
        sneaker_size {
          title
        }
        trade_status {
          title
        }
      }
    }
  }
`;

export const LOAD_RECEIVES = gql`
query MyQuery {
  offer_trade(where: {offer: {offer_payments: {offer_payment_receiveds: {offer_payment_status_id: {_eq: "pass"}}}}}) {
    offer_id
    trade_id
    trade {
      created_at
      sneaker {
        name
        thumb_url
        style_id
      }
      sneaker_condition {
        title
      }
      sneaker_size {
        title
      }
      user {
        name
        email
        user_addresses {
          city
          country
          state
          zipcode
        }
      }
      trade_status {
        title
      }
    }
    offer {
      offer_payment_receiveds {
        qc_size
        qc_sku
        qc_sneaker_condition
        qc_right_left
        qc_box_condition
        qc_accessories
        qc_sneaker_condition
        offer_payment {
          total_amount
        }
      }
    }
  }
}
`
export const LOAD_AUTHS = gql`
query MyQuery {
  offer_trade(where: {offer: {offer_payment_authentications: {offer_payment_authentication_status_id: {_eq: "pass"}}}}) {
    offer_id
    trade_id
    trade {
      created_at
      user {
        email
        name
         user_addresses {
          city
          country
          state
          zipcode
        }
      }
      trade_status {
        title
      }
      sneaker {
        name
        thumb_url
        style_id
      }
      sneaker_condition {
        title
      }
      sneaker_size {
        title
      }
    }
    offer {
      offer_payment_authentications {
        offer_payment {
          total_amount
        }
        qc_color_shape
        qc_sole
        qc_material
        qc_box_label
        qc_stitching
        qc_shoe_tag
      }
    }
  }
}
`
export const LOAD_PFIWS = gql`
  query MyQuery {
    offer_trade(limit: 5) {
      offer_id
      trade_id
      offer {
        cash_add
        offer_trades {
          trade {
            id
            user {
              name
              email
              user_addresses {
                city
                country
                state
                zipcode
              }
            }
            sneaker {
              retail_price
              name
              thumb_url
            }
            sneaker_condition {
              title
            }
            sneaker_size {
              title
            }
            trade_status {
              title
            }
          }
        }
      }
      trade {
        created_at
        user {
          name
          email
          user_addresses {
            city
            country
            state
            zipcode
          }
        }
        sneaker {
          name
          retail_price
          thumb_url
        }
        sneaker_condition {
          title
        }
        sneaker_size {
          title
        }
        trade_status {
          title
        }
      }
    }
  }
`
export const LOAD_SHIPPING = gql`
  query MyQuery {
    offer_trade(limit: 5) {
      offer_id
      trade_id
      offer {
        cash_add
        offer_trades {
          trade {
            id
            created_at
            user {
              name
              email
              user_addresses {
                city
                country
                state
                zipcode
              }
            }
            sneaker {
              retail_price
              name
              thumb_url
            }
            sneaker_condition {
              title
            }
            sneaker_size {
              title
            }
            trade_status {
              title
            }
          }
        }
      }
      trade {
        created_at
        user {
          name
          email
          user_addresses {
            city
            country
            state
            zipcode
          }
        }
        sneaker {
          name
          retail_price
          thumb_url
        }
        sneaker_condition {
          title
        }
        sneaker_size {
          title
        }
        trade_status {
          title
        }
      }
    }
  }
`
export const LOAD_OUTBOUNDS = gql`
  query MyQuery {
    offer_trade(limit: 5) {
      offer_id
      trade_id
      offer {
        cash_add
        offer_payments {
          id
          total_amount
          offer_tracking_status_id
        }
        offer_trades {
          trade {
            id
            created_at
            user {
              name
              email
              user_addresses {
                city
                country
                state
                zipcode
              }
            }
            sneaker {
              retail_price
              name
              thumb_url
            }
            sneaker_condition {
              title
            }
            sneaker_size {
              title
            }
            trade_status {
              title
            }
          }
        }
      }
      trade {
        created_at
        user {
          name
          email
          user_addresses {
            city
            country
            state
            zipcode
          }
        }
        sneaker {
          name
          retail_price
          thumb_url
        }
        sneaker_condition {
          title
        }
        sneaker_size {
          title
        }
        trade_status {
          title
        }
      }
    }
  }
`
export const LOAD_NOTIFICATIONS = gql`
  query MyQuery {
    notification(limit: 5) {
      id
      title
    }
  }
`

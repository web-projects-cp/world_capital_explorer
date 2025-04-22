import React, { useEffect } from 'react'
import { Action } from 'redux'
import { useDispatch, useSelector } from 'react-redux'
import { ThunkDispatch } from 'redux-thunk'

import { AppState, CountriesState } from '../types'
// import { AppState } from '../types'

import { getCountries } from '../redux/actions'

export default function Home() {
  const dispatch = useDispatch()

  const { countries, loading, error } = useSelector(
    (state: AppState) => state.countriesData
  )

  useEffect(() => {
        console.log('Loading:', loading); // Check if loading is true
    console.log('Countries:', countries); // Check the countries data
    if (!loading && countries.length === 0) {
      console.log("Fetching countries...");
      ;(dispatch as ThunkDispatch<CountriesState, void, Action>)(getCountries())
    }
  }, [dispatch, loading])

  // useEffect(() => {
  //   console.log('Loading:', loading); // Check if loading is true
  //   console.log('Countries:', countries); // Check the countries data
  //   if (!countries && !loading) { // Only fetch if no countries data is loaded
  //     dispatch(getCountries());
  //   }
  // }, [dispatch, countries, loading]);

  return (
    <>
      {error && <p>{error}</p>}
      {loading && <p>Loading...</p>}
      <div>
        {countries.map((i) => (
          <h1>{i.capital}</h1>
        ))}
      </div>
    </>
  )
}

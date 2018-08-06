/* eslint-disable */

import { filtersByType } from '../config/properties'

export const filterItemsByFilters = (selectedFilters, itemsToFilter) =>
  itemsToFilter.map(item => {
    const typeOfItem = item.subtype1[0]
    const appliedFilters = selectedFilters.filter(
      filter =>
        filtersByType[filter].some(
          flt => typeOfItem.toLowerCase().includes(flt.toLowerCase()
        )
      )
    )
    return appliedFilters.length ? item : null
  }).filter(item => !!item)

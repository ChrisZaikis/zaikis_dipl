import { Form } from "react-bootstrap";

const AttributesFilterComponent = ({ attrsFilter, setAttrsFromFilter }) => {
//   console.log(attrsFilter);
  return (
    <>
      {attrsFilter &&
        attrsFilter.length > 0 &&
        attrsFilter.map((filter, idx) => (
          <div key={idx} className="mb-3">
            <Form.Label>
              <b>{filter.key}</b>
            </Form.Label>
            {filter.value.map((valueForKey, idx2) => (
              <Form.Check key={idx2} type="checkbox" label={valueForKey} onChange={e => {
                 setAttrsFromFilter(filters => {
                     if (filters.length === 0) {
                         return [{ key: filter.key, values: [valueForKey] }];
                     } 

                    let index = filters.findIndex((item) => item.key === filter.key);
                    if (index === -1) {
                        // if not found (if clicked key is not inside filters)
                        return [...filters, { key: filter.key, values: [valueForKey] }];
                    }

                    // if clicked key is inside filters and checked
                    if (e.target.checked) {
                        filters[index].values.push(valueForKey);
                        let unique = [...new Set(filters[index].values)];
                        filters[index].values = unique;
                        return [...filters];
                    }

                    // if clicked key is inside filters and unchecked
                    let valuesWithoutUnChecked = filters[index].values.filter((val) => val !== valueForKey);
                    filters[index].values = valuesWithoutUnChecked;
                    if (valuesWithoutUnChecked.length > 0) {
                        return [...filters];
                    } else {
                        let filtersWithoutOneKey = filters.filter((item) => item.key !== filter.key);
                        return [...filtersWithoutOneKey];
                    }

                 }) 
              }} />
            ))}
          </div>
        ))}
    </>
  );
};

export default AttributesFilterComponent;

export const changeCategory = (e, categories, setAttributesFromDb, setCategoryChoosen) => {
    const highLevelCategory = e.target.value.split("/")[0];
    const highLevelCategoryAllData = categories.find(
      (cat) => cat.name === highLevelCategory
    );
    if (highLevelCategoryAllData && highLevelCategoryAllData.attrs) {
      setAttributesFromDb(highLevelCategoryAllData.attrs);
    } else {
      setAttributesFromDb([]);
    }
    setCategoryChoosen(e.target.value);
  };

  export const setValuesForAttrFromDbSelectForm = (e, attrVal, attributesFromDb) => {
    if (e.target.value !== "Choose attribute") {
      var selectedAttr = attributesFromDb.find(
        (item) => item.key === e.target.value
      );
      let valuesForAttrKeys = attrVal.current;
      if (selectedAttr && selectedAttr.value.length > 0) {
        while (valuesForAttrKeys.options.length) {
          valuesForAttrKeys.remove(0);
        }
        valuesForAttrKeys.options.add(new Option("Choose attribute value"));
        selectedAttr.value.map((item) => {
          valuesForAttrKeys.add(new Option(item));
          return "";
        });
      }
    }
  };

  export const setAttributesTableWrapper = (key, val, setAttributesTable) => {
      setAttributesTable((attr) => {
          if (attr.length !== 0) {
              var keyExistsInOldTable = false;
              let modifiedTable = attr.map(item => {
                  if (item.key === key) {
                      keyExistsInOldTable = true;
                      item.value = val;
                      return item;
                  } else {
                      return item;
                  }
              })
              if (keyExistsInOldTable) return [...modifiedTable];
              else return [...modifiedTable, { key: key, value: val }];
          } else {
             return [{ key: key, value: val }]; 
          }
      })
  }
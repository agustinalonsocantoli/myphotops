export const setOrder = (list, order) => {
    const newList = [...list]

    if (order === 'maxW') {
        newList.sort((a, b) => { 
            if(a.width < b.width) {
                return 1
            } 
    
            if(a.width > b.width) {
                return -1
            } 
    
            return 0;
        }) 
    } 
    else if (order === 'minW') {
        newList.sort((a, b) => { 
            if(a.width < b.width) {
                return -1
            } 
    
            if(a.width > b.width) {
                return 1
            } 
    
            return 0;
        }) 
    }  
    else if (order === 'maxH') {
        newList.sort((a, b) => { 
            if(a.height < b.height) {
                return 1
            } 
    
            if(a.height > b.height) {
                return -1
            } 
    
            return 0;
        }) 
    } 
    else if (order === 'minH') {
        newList.sort((a, b) => { 
            if(a.height < b.height) {
                return -1
            } 
    
            if(a.height > b.height) {
                return 1
            } 
    
            return 0;
        }) 
    }
    else if (order === 'maxL') {
        newList.sort((a, b) => { 
            if(a.likes < b.likes) {
                return 1
            } 
    
            if(a.likes > b.likes) {
                return -1
            } 
    
            return 0;
        }) 
    } 
    else if (order === 'minL') {
        newList.sort((a, b) => { 
            if(a.likes < b.likes) {
                return -1
            } 
    
            if(a.likes > b.likes) {
                return 1
            } 
    
            return 0;
        }) 
    }
    else if (order === 'older') {
        newList.sort((a, b) => { 
            if(a.date < b.date) {
                return 1
            } 
    
            if(a.date > b.date) {
                return -1
            } 
    
            return 0;
        }) 
    } 
    else if (order === 'Newer') {
        newList.sort((a, b) => { 
            if(a.date < b.date) {
                return -1
            } 
    
            if(a.date > b.date) {
                return 1
            } 
    
            return 0;
        }) 
    }

    return newList
}
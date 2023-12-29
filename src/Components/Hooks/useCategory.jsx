import {useQuery} from "@tanstack/react-query";
import useAxiosPublic from "../Axiosfiles/useAxiosPublic.jsx";

const UseCategory = () => {

    const axiosPublic = useAxiosPublic();

    const {data: products = [], refetch} = useQuery({
        queryKey: ['product'],
        queryFn: async () => {
            const res = await axiosPublic.get('/product')
            return res.data
        }
    })

    return [products, refetch]
};

export default UseCategory;
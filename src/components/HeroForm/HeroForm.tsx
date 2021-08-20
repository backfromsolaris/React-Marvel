import { useDispatch, useSelector, useStore } from 'react-redux';
import { useForm } from 'react-hook-form';
import { chooseHeroName, chooseDescription, chooseComicsAppearedIn, chooseSuperPower } from '../../redux/slices/rootSlice';
import { Input } from '../sharedComponents/Input';
import { Button } from '@material-ui/core';

import { server_calls } from '../../api';

import { useGetData } from '../../custom-hooks';

interface HeroFormProps {
    id?:string,
    data?:{}
}

interface HeroState {
    hero_name: string,
    description: string,
    comics_appeared_in: number,
    super_power: string
}

export const HeroForm = (props:HeroFormProps) => {

    const dispatch = useDispatch();
    let { heroData, getData } = useGetData();
    const store = useStore();
    const hero_name = useSelector<HeroState>(state => state.hero_name);
    const { register, handleSubmit } = useForm({});

    const onSubmit = (data:any, event:any) => {
        console.log(props.id)

        if(props.id!){
            server_calls.update(props.id!, data)
            console.log(`Updated:${data} ${props.id}`)
            window.location.reload()
            event.target.reset();
        }else{
            dispatch(chooseHeroName(data.hero_name))
            dispatch(chooseDescription(data.description))
            dispatch(chooseComicsAppearedIn(data.comics_appeared_in))
            dispatch(chooseSuperPower(data.super_power))
            server_calls.create(store.getState())
        }
    }
    return (
        <div>
            <form onSubmit = {handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="hero_name">Hero Name</label>
                    <Input {...register('hero_name')} name="hero_name" placeholder='hero name...'/>
                </div>
                <div>
                    <label htmlFor="description">Description</label>
                    <Input {...register('description')} name="description" placeholder="description..."/>
                </div>
                <div>
                    <label htmlFor="comics_appeared_in"># of Comics Appeared In</label>
                    <Input {...register('comics_appeared_in')} name="comics_appeared_in" placeholder="# of comics appeared in..."/>
                </div>
                <div>
                    <label htmlFor="super_power">Super Power</label>
                    <Input {...register('super_power')} name="super_power" placeholder="super power..."/>
                </div>
                <Button type='submit'>Submit</Button>
            </form>
        </div>
    )
}
import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({ name: 'TBL_AIR', schema: 'public', synchronize: false })
export class TBL_AIR {
    @PrimaryGeneratedColumn({comment: 'seq'})
    tbl_air_seq!: number;

    @Column({type: 'varchar', length: 10, comment: '시군코드'})
    sigun_cd!: string;

    @Column({type: 'varchar', length: 10, comment: '시군명'})
    sigun_nm!: string;

    @Column({type: 'varchar', length: 10, comment: '측정소명'})
    mesurstn_nm!: string;

    @Column({type: 'varchar', length: 1, comment: '설치년도'})
    instl_yy!: string;

    @Column({type: 'varchar', length: 20, comment: '측정망명'})
    mesrnw_nm!: string;

    @Column({type: 'date', comment: '측정일시각'})
    mesure_day_tm!: string;

    @Column({type: 'varchar', length: 20, comment: '아황산가스농도값(ppm)'})
    sua_gas_dnst_vl!: string;

    @Column({type: 'varchar', length: 20, comment: '일산화탄소농도값(ppm)'})
    comnxd_dnst_vl!: string;

    @Column({type: 'varchar', length: 20, comment: '이산화질소농도값(ppm)'})
    no2_dnst_vl!: string;

    @Column({type: 'varchar', length: 20, comment: '오존농도값(ppm)'})
    ozone_dnst_vl!: string;

    @Column({type: 'varchar', length: 20, comment: '미세먼지PM10농도값(μg/m³)'})
    finedust_pm10_dnst_vl!: string;

    @Column({type: 'varchar', length: 20, comment: '미세먼지PM2.5농도값(μg/m³)'})
    finedust_pm2_5_dnst_vl!: string;
    
    @CreateDateColumn({ name: 'create_at', type: 'timestamptz', comment: '생성일' })
    createdAt: Date;

    @UpdateDateColumn({ name: 'update_at', type: 'timestamptz', comment: '수정일' })
    updatedAt: Date;

    @DeleteDateColumn({ name: 'delete_at', type: 'timestamptz', comment: '삭제일' })
    deletedAt?: Date | null;

}
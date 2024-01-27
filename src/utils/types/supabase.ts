export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      blog: {
        Row: {
          description: string
          id: number
          photo: string
          theme: string
        }
        Insert: {
          description: string
          id?: number
          photo: string
          theme: string
        }
        Update: {
          description?: string
          id?: number
          photo?: string
          theme?: string
        }
        Relationships: []
      }
      employee: {
        Row: {
          avatar: string
          id: number
          name: string
          position: string
        }
        Insert: {
          avatar: string
          id?: number
          name: string
          position: string
        }
        Update: {
          avatar?: string
          id?: number
          name?: string
          position?: string
        }
        Relationships: []
      }
      feedback: {
        Row: {
          id: number
          message: string
          phone: string
          user_name: string
        }
        Insert: {
          id?: number
          message: string
          phone: string
          user_name: string
        }
        Update: {
          id?: number
          message?: string
          phone?: string
          user_name?: string
        }
        Relationships: []
      }
      "gallery-category": {
        Row: {
          bucket: string
          id: number
          name: string
        }
        Insert: {
          bucket: string
          id?: number
          name: string
        }
        Update: {
          bucket?: string
          id?: number
          name?: string
        }
        Relationships: []
      }
      map: {
        Row: {
          id: number
          location: unknown
          photo: string
          zoom: unknown
        }
        Insert: {
          id?: number
          location: unknown
          photo: string
          zoom: unknown
        }
        Update: {
          id?: number
          location?: unknown
          photo?: string
          zoom?: unknown
        }
        Relationships: []
      }
      plan: {
        Row: {
          benefits: string[]
          id: number
          name: string
          price: number
        }
        Insert: {
          benefits: string[]
          id?: number
          name: string
          price: number
        }
        Update: {
          benefits?: string[]
          id?: number
          name?: string
          price?: number
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      get_map: {
        Args: Record<PropertyKey, never>
        Returns: {
          location: Json
          zoom: Json
          photo: string
          id: number
        }[]
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (Database["public"]["Tables"] & Database["public"]["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (Database["public"]["Tables"] &
      Database["public"]["Views"])
  ? (Database["public"]["Tables"] &
      Database["public"]["Views"])[PublicTableNameOrOptions] extends {
      Row: infer R
    }
    ? R
    : never
  : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
      Insert: infer I
    }
    ? I
    : never
  : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
      Update: infer U
    }
    ? U
    : never
  : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof Database["public"]["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof Database["public"]["Enums"]
  ? Database["public"]["Enums"][PublicEnumNameOrOptions]
  : never
